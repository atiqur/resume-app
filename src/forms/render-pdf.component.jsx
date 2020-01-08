import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import CreatePDF from './resume-pdf.component';

const RenderPDF = ReactPDF.render(<CreatePDF />, `${__dirname}/example.pdf`);

export default RenderPDF;
