FROM  openjdk:8-jdk-alpine 

VOLUME /tmp

WORKDIR /app

ADD . /app

ENV JAVA_OPTS=""
EXPOSE 8888
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app/app.jar"  ]

