A = LOAD 'data' USING PigStorage('\t') AS (sport:chararray, year:chararray, manufacturer:chararray, set:chararray, subset:chararray, playername:chararray, cardno:chararray, parallel:chararray, rookie:chararray, auto:chararray, serialnumber:chararray, memorabilia:chararray ); 
B = LOAD 'data' USING PigStorage('\t') AS (title:chararray, date:chararray, price:chararray);
Csh = sh cat inventory | awk '{print $6}';
JOINED = JOIN B by $6, A by REGEX_EXTRACT_ALL(A, Csh);
