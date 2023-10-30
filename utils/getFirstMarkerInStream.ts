/**
 * detects a start-of-packet marker in the datastream. In the protocol being used by the Elves, the start of a packet is indicated by a sequence of four characters that are all different.
 * Identifies the first position where the four most recently received characters were all different.
 * Specifically, reports the number of characters from the beginning of the buffer to the end of the first such four-character marker.
 * @param signal a series of seemingly-random characters that the device receives one at a time.
 * @param minPacketSize minimum length of the unique characters
 * @example getFirstMarker("bvwbjplbgvbhsrlpgdmjqwftvncz") => 5
 * @example getFirstMarker("nppdvjthqldpwncqszvftbrmjlhg") => 6
 */
const getFirstMarker = (signal: string, minPacketSize = 4): number => {
  const buffer = [] as string[];

  const signalSplit = signal.split("");

  for (let n = 0; n <= signalSplit.length; n++) {
    const char = signalSplit[n];
    const bufferLength = buffer.length;

    if (bufferLength < minPacketSize) {
      buffer.push(char);
      continue;
    }

    if (bufferLength === minPacketSize) {
      buffer.shift();
    }

    buffer.push(char);

    const bufferIsValid = [...new Set(buffer)].length === minPacketSize; 

    if (bufferIsValid) {
      return n + 1;
    }

    continue;
  }

  return 0;
};

export default getFirstMarker;
