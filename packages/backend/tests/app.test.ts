const {MongoClient} = require('mongodb');

describe('MongoDB tests', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a task into collection', async () => {
    const tasks = db.collection('tasks');
    const mockTask = {_id: '01', Title: 'My test task to be inserted'};

    await tasks.insertOne(mockTask);

    const insertedTask = await tasks.findOne({_id: '01'});

    expect(insertedTask).toEqual(mockTask);
  });

  it('should remove a task from collection', async () => {
    const tasks = db.collection('tasks');
    const mockTask = {_id: '02', Title: 'My test task to be removed'};

    await tasks.insertOne(mockTask);
    await tasks.deleteOne({_id: '02'});

    const deletedTask = await tasks.findOne({_id: '02'});
    
    expect(deletedTask).toEqual(null);
  });
});