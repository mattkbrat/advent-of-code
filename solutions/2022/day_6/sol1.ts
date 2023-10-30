import getFirstMarker from "../../../utils/getFirstMarkerInStream.ts";

const sixOne2022 = (content: string[], minPacketSize: number) => {
  return getFirstMarker(content[0], minPacketSize)
}

export default sixOne2022