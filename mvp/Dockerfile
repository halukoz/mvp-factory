FROM maven:3.8.3-openjdk-17 AS MAVEN_BUILD
COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM openjdk:17-jdk-alpine

COPY --from=MAVEN_BUILD /build/target/demo-0.0.1.jar demo-0.0.1.jar
ENTRYPOINT ["java","-jar","/demo-0.0.1.jar"]