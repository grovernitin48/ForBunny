const userRoutes = (app, fs) => {
    const dataPath = './data/services.json';
  
    app.get('/services', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = userRoutes;