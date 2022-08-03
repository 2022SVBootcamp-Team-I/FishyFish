# syntax=docker/dockerfile:1
FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /backend

COPY requirements.txt /backend/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -r https://raw.githubusercontent.com/ultralytics/yolov5/master/requirements.txt

COPY . /backend/
