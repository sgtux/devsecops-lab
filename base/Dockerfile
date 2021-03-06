FROM ubuntu:latest
ENV TZ America/Sao_Paulo
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /root
RUN apt update && \
    apt upgrade -y && \
    apt install net-tools iputils-ping vim wget curl git -y