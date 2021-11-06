from json import dumps, loads
import os

from flask import Flask, request, jsonify, Response, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL').replace('postgres://', 'postgresql://')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from model import db

db.app = app
db.init_app(app)


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/api/v1/guest", methods=['POST'])
@cross_origin()
def post_guest_info():
    received_value = request.get_json(force=True)
    from validation import GuestSchema
    schema = GuestSchema()
    print(type(received_value))
    print(received_value)
    try:
        result = schema.loads(dumps(received_value))
        print(result)
        wedding_presence = result["wedding_presence"]
        guests_names = result["guests_names"]
        email = result["email"]
        phone = result["phone"]
        covid_vaccination_number = result["covid_vaccination_number"]
        diet = result["diet"]
        from_hotel_to_church = result["from_hotel_to_church"]
        from_church_to_wedding = result["from_church_to_wedding"]
        transport_from_wedding = result["transport_from_wedding"]
    except Exception as e:
        app.logger.error('Cant parse request, error: %s', str(e))
        return Response(status=400)

    try:
        from model import Guest
        new_guest = Guest(guests_names=guests_names,
                          email=email,
                          phone=phone,
                          wedding_presence=wedding_presence,
                          covid_vaccination_number=covid_vaccination_number,
                          diet=diet,
                          from_hotel_to_church=from_hotel_to_church,
                          from_church_to_wedding=from_church_to_wedding,
                          transport_from_wedding=transport_from_wedding)
        db.session.add(new_guest)
        db.session.commit()

    except Exception as e:
        app.logger.error('Database operation failed: %s', str(e))
        return Response(status=500)
    return jsonify({"result": "Success"}), 200


if __name__ == "__main__":
    app.run()
