# integer_sequences

2015-II Object Oriented Programming course project

## Goals

1. Display several [integer sequences](https://en.wikipedia.org/wiki/Integer_sequence) using different charts.
2. (Optional) Do it in [p5.js](http://p5js.org/) (see [this example](https://github.com/objetos/objects/blob/gh-pages/sketches/objects.js), and the section 'objects' [here](http://p5js.org/examples/)).



### Important variables:

1. serie: Choose sequence to graphic. (0= Fibonacci, 1=Golomb, 2=Juggler)
2. mode: Is the type of graphic representation for sequences. (0=First graphic representation, 1=Bar chart, 2=Line chart, 3=Curve fitting)
3. n: Value to compute with sequence.

### Keys

1. Change sequence with  ">" and "<" keys (next and last respectly).
2. The keys "," and "." change mode of graphic representation
3. "+" and "-" keys increase and decrease the n value respectly.
4. "p" prints first N numbers

### WARNING

1. Biggest values for n on sequence will kill your pc.
2. Juggler compute is the maximum value in Juggler array, Juggler() is the function that returns the sequence array.
3. Best performance commenting lines 95-97 and 102-104 of IntegerSequences.pde.