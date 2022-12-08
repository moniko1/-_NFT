import React, { Component } from "react"
import IpfsApi from "ipfs-api"

class VideoForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>이미지 업로드</h1>

                    {this.state.ipfsHash}

                    <input type="file" />
                    <button>등록</button>
                </form>

            </div>
        )
    }
}

export default VideoForm