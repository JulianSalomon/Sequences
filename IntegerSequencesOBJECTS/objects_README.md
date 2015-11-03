# IntegerSequences

2015-II Integer Sequences in Objects

## Important variables:

1. serie: Choose sequence to graphic. (0= Fibonacci, 1=Golomb, 2=Juggler, 3=Deficient, 4=Abundant, 5=Perfect)
2. mode: Is the type of graphic representation for sequences. (0=First graphic representation, 1=Bar chart, 2=Line chart, 3=Curve fitting)
3. n: Value to compute with sequence.

## Keys

1. Change sequence with  ">" and "<" keys (next and last respectly).
2. The keys "," and "." change mode of graphic representation
3. "+" and "-" keys increase and decrease the n value respectly.
4. "p" prints first N numbers

## WARNING

1. Biggest values for n on sequences will kill your pc (Perfect(5)=33550336).
2. Juggler compute is the maximum value in Juggler array, Juggler() is the function that returns the sequence array.
3. Best performance commenting lines 95-97 and 102-104 of IntegerSequences.pde.