import os
import sys

from dotenv import load_dotenv

if os.path.isfile('.env'):
    load_dotenv()


def create_tables(args):
    from server import db
    print('Creating all...')
    db.create_all()
    db.session.commit()
    print(' - DB tables: ' + ",".join(db.metadata.tables.keys()))
    print('Create all done')
    print()


def drop_tables(args):
    from server import db
    print('Dropping all..')
    db.drop_all()
    db.session.commit()
    print(' - DB tables: ' + ",".join(db.metadata.tables.keys()))
    print('Drop all done')
    print()


def recreate_tables(args):
    drop_tables(args)
    create_tables(args)


OPERATIONS = {
    "create_tables": create_tables,
    "drop_tables": drop_tables,
    "recreate_tables": recreate_tables
}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print('usage: ' + sys.argv[0] + ' <' + "|".join(OPERATIONS.keys()) + '>')
        exit(1)

    oper = OPERATIONS.get(sys.argv[1])
    if not oper:
        print('Not supported operation: ' + sys.argv[1])
        print('usage: ' + sys.argv[0] + ' <' + "|".join(OPERATIONS.keys()) + '>')
        exit(2)

    oper(sys.argv)
