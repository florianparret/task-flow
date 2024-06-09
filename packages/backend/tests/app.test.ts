import "dotenv/config";
const { MongoClient } = require('mongodb');

describe('MongoDB tests', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URI, {
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

  it('should update a task in collection', async () => {
    const tasks = db.collection('tasks');
    const mockTask = {_id: '03', Title: 'My test task to be updated'};

    await tasks.insertOne(mockTask);
    await tasks.updateOne({_id: '03'}, { $set: { Title: 'My updated task' } });

    const updatedTask = await tasks.findOne({_id: '03'});
    
    expect(updatedTask.Title).toEqual('My updated task');
  });
});