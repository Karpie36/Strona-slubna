import string

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()


class Guest(db.Model):
    __tablename__ = "guests"
    id = db.Column(db.Integer, primary_key=True)
    guests_names = db.Column(db.String(150))
    email = db.Column(db.String(150))
    phone = db.Column(db.String(150))
    wedding_presence = db.Column(db.Boolean, default=False)
    covid_vaccination_number = db.Column(db.String(50))  # TODO: to powinien być typ Numeric
    diet = db.Column(db.String(150))
    from_hotel_to_church = db.Column(db.Boolean, default=False, nullable=False)
    from_church_to_wedding = db.Column(db.Boolean, default=False, nullable=False)
    transport_from_wedding = db.Column(db.String(50))
    date = db.Column(db.DateTime(timezone=True), default=func.now())

    def __init__(self,
                 guests_names: string,
                 email: string,
                 phone: string,
                 wedding_presence: bool,
                 covid_vaccination_number: string,
                 diet: string,
                 from_hotel_to_church: bool,
                 from_church_to_wedding: bool,
                 transport_from_wedding: string):
        self.guests_names = guests_names
        self.email = email
        self.phone = phone
        self.wedding_presence = wedding_presence
        self.covid_vaccination_number = covid_vaccination_number
        self.diet = diet
        self.from_hotel_to_church = from_hotel_to_church
        self.from_church_to_wedding = from_church_to_wedding
        self.transport_from_wedding = transport_from_wedding
