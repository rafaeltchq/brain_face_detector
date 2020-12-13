const FaceSquareDiv = (box) => {
    const image = document.getElementById('imgDctFace')
    const height = Number(image.height);
    const width = Number(image.width);
    var coordBox = []
    box.map(region => {
        
        const regionPath = region.region_info.bounding_box 
        const coord = [
            {
                topRow: regionPath.top_row * height,
                leftCol: regionPath.left_col * width,
                bottomRow: height - (regionPath.bottom_row * height),
                rightCol: width - (regionPath.right_col * width)
            }
        ]
        return coordBox.push(coord);
    });
    return coordBox;
}
export default FaceSquareDiv;