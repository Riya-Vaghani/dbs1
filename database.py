import psycopg

def get_connection():
    return psycopg.connect(
        dbname="online_movie_booking",
        user="postgres",
        password="1234",
        host="localhost",
        port="5432"
    )
