import path from 'path';

const robotController = async (req, res) => {
    try {
      // const robotFilePath = path.join(__dirname, '..', 'views', 'robots.txt');
      // console.log(robotFilePath)
      const robotFilePath = '/var/www/html/testexpress3.jobaaj.com/views/robots.txt';
      // res.send(`File Path: ${robotFilePath}`);
      // Send the file as plain text
      res.sendFile(robotFilePath, { headers: { 'Content-Type': 'text/plain' } });
    } catch (error) {
        console.error('Error fetching robot', error);
        res.status(500).send('Internal Server Error, Error fetching robot');
    }
};

export { robotController };

