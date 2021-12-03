"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token,jwt_required, get_jwt_identity
import json

from sqlalchemy import update
from sqlalchemy import and_





api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/create-user', methods = ['POST'])
def create_user():
        name = request.json.get("name")
        email = request.json.get("email")
        password = request.json.get(("password"))
        user = User(name=name, email=email, password=password)

        db.session.add(user)
        db.session.commit()

        return jsonify(user.id), 200
@api.route('/login', methods = ['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route ('/private', methods = ['GET'])
@jwt_required()
def get_info():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id).first()
    name = user.name
    email = user.email
    password = user.password
    
    print(user)
  

    
    return jsonify({"name" : name , "email" : email, "password" :password})

