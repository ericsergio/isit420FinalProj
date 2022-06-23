A = LOAD 'data' USING PigStorage('\t') AS (title:chararray, date:chararray, price:chararray);
DUMP A;
