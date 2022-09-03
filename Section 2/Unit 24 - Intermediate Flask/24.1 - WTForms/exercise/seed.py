from models import Pet

def seed(db):
    db.drop_all()
    db.create_all()
    
    #Add pets
    p1 = Pet(name='Woody', species='DOG', photo_url='/static/images/woody.jpg', age=5, notes='Loves rawhides and drinking out of toilets.', available=False)
    p2 = Pet(name='Nolan', species='DOG', photo_url='/static/images/nolan.jpg', age=13, notes='Loves to sleep and smells like smelly feet.', available=False)
    p3 = Pet(name='Sally', species='CAT', photo_url='/static/images/sally.jpg', age=9, notes='Loves to cuddle and run.', available=True)
    p4 = Pet(name='Tippy', species='CAT', photo_url='/static/images/tippy.jpg', age=8, notes='Loves to sit in the corner and judge silently.', available=False)
    p5 = Pet(name='Lenny Penny', species='PORCUPINE', photo_url='/static/images/lennypenny.jpg', age=1, notes='Vaccinations up to date.', available=True)
    p6 = Pet(name='Thumper', species='PORCUPINE', photo_url='/static/images/thumper.jpg', age=2, notes='Located in Birdsboro.', available=True)
    p7 = Pet(name='Lightning', species='PORCUPINE', notes='Super fast.', available=True)
    
    
    db.session.add_all([p1, p2, p3, p4, p5, p6, p7])
    db.session.commit()