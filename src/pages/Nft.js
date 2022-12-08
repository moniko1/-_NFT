import React, { useState } from 'react'
import { ImageUpload } from 'react-ipfs-uploader'

const Nft = () => {
    const [imageUrl, setImageUrl] = useState('')
    const [fileImage, setFileImage] = useState("");

    const saveFileImage = (e) => {
        setImageUrl(URL.createObjectURL(e.target.files[0]));
      };

    return (
        <div>
            <ImageUpload setUrl={setImageUrl} />
            <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />
        </div>
    )
}

export default Nft