import firebase_admin, requests, time, random
from firebase_admin import credentials, firestore
import gspread

def insert_bio(db, name, email, birthdate, bio, picture_link, lat, longt):
    data = {
        u'name': name,
        u'birthdate': birthdate,
        u'bio': bio,
        u'img': picture_link,
        u'location': firestore.GeoPoint(lat, longt)
    }

    db.collection(u'bios').document(email.lower()).set(data)

def convert_location(location):
    r = requests.get('https://geocode.xyz/', params={
        'locate': location,           
        'json': 1,
    })
    if 'error' in r.json().keys():
        return (random.uniform(-90, 90), random.uniform(-180, 180))
    else:
        return (float(r.json()['latt']), float(r.json()['longt']))


def get_bio(ws, index):
    data = ws.row_values(index)
    return (data[1], data[2], data[4], data[5], data[6], *convert_location(data[3]))

def main():
    gc = gspread.service_account('rfts-323109-693cae413740.json')

    sh = gc.open("NEW WEBSITE BIOS AUG 2021 (Responses)")
    ws = sh.get_worksheet(0)

    cred = credentials.Certificate('./rfts-backend-temp-firebase-adminsdk-7435m-74eb1d1043.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    for i in range(2, 1000):
        temp_bio = get_bio(ws, i)
        if temp_bio[0] == '':
            break

        insert_bio(db, *temp_bio)
        print(f'Inserted bio for person {temp_bio[0]}')
        time.sleep(1)

if __name__ == "__main__":
    main()