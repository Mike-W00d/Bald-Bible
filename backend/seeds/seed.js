const mongoose = require("mongoose");
const User = require("../models/user");
const USERS = require("./user_data");
const Image = require("../models/image");
const IMAGES = require("./image_data");
const { password } = require("../config");
const signup = require("../controllers/user");
const bcrypt = require("bcrypt");

const mongoDbUrl =
  process.env.mongoDbUrl ||
  `mongodb+srv://mgwood22:${password}@bald-bible.is3dygf.mongodb.net/?retryWrites=true&w=majority&appName=bald-bible`;

// Hash all user passwordsn
const hashPasswords = async (users) => {
  const saltRounds = 10;
  for (let user of users) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashedPassword;
    } catch (error) {
      console.error(
        `Error hashing password for user ${user.username}: ${error}`,
      );
      user.password = "defaultHashedPassword";
    }
  }
  return users;
};
// connecting to the database:
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// remove all documents from the databse:
const resetDB = async () => {
  await User.deleteMany({});
  // await Image.deleteMany({});
};

//insert users to the DB:
const insertUsers = async () => {
  const hashedUsers = await hashPasswords(USERS); // Await the result of hashPasswords
  await User.insertMany(hashedUsers);
};

// return list of users:
const findUser = async () => {
  const users = await User.find({});
  return users;
};

//insert images to the DB:
const insertImages = async () => {
  await Image.insertMany(IMAGES);
};

// seed function called by npm run seed
const seedDB = async () => {
  try {
    await resetDB();
    await insertUsers();
    await insertImages();
    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    process.exit(0);
  }
};

seedDB();
