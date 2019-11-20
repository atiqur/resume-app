import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          temporibus culpa, optio veniam quidem praesentium odit repellendus
          nihil explicabo ducimus maxime assumenda amet laudantium fuga magni
          perspiciatis molestias repellat dolor?
        </Text>
      </View>
      <View style={styles.section}>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          repellat soluta tempore culpa ut esse maxime minima, distinctio
          incidunt tempora rem quaerat? Aliquid minima animi earum? Ex
          dignissimos laboriosam tempora!
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
