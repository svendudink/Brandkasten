import Realm from "realm";

const RealmSync = async () => {
  const app = new Realm.App({ id: "brandkastenservice-oaecv" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await app.logIn(credentials);
  } catch (err) {
    console.error("Failed to log in", err);
  }
};

export default RealmSync;
