const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/generate', (req, res) => {
  try {
    const { title, content } = req.body;
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=document.pdf');
    doc.pipe(res);
    doc.fontSize(20).text(title || 'CodeCraftAI Document', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(content || '');
    doc.end();
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/parse', upload.single('pdf'), async (req, res) => {
  try {
    res.json({ text: 'PDF received: ' + req.file.originalname, pages: 1 });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
