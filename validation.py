from marshmallow import Schema, fields, validate

phone_regex = (
    r"( )*(?:\+48|\+48 |)(?:(([0-9]{3}-[0-9]{3}-[0-9]{3})|([0-9]{9})|([0-9]{3} [0-9]{3} [0-9]{3})))( )*"
)

class GuestSchema(Schema):
    wedding_presence = fields.Boolean(required=True)
    guests_names = fields.Str(
        required=True, validate=[validate.Length(min=10, max=150)],
    )
    # print(guests_names)
    phone = fields.Str(required=True, validate=validate.Regexp(phone_regex))
    # print(phone)
    email = fields.Email(required=True)
    covid_vaccination_number = fields.Str(
        required=True, validate=[validate.Length(min=1, max=10)],
    )
    diet = fields.Str(
        required=True, validate=[validate.Length(min=0, max=150)],
    )
    from_hotel_to_church = fields.Boolean(required=True)
    from_church_to_wedding = fields.Boolean(required=True)
    transport_from_wedding = fields.Str(
        required=True, validate=[validate.Length(min=0, max=150)],
    )