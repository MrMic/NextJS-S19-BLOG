// * INFO:  API => /api/contact

// ! WARN: On the Server Side only!
function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    console.log("🪚 ewMessage:", newMessage);

    res.status(201).json({ message: 'Successfully stored message! 💾', message: newMessage });

  }
}

export default handler;
