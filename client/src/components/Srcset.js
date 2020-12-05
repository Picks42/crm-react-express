import React from 'react';

class Srcset extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { parentWidth: null };
  }
  imageUrl = (src, size) => {
    try {
      return src
        .replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, '.')
        .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function (match) {
          return '_' + size + match;
        });
    }
    catch (e) {
      console.log(e);
      return src;
    }
  }
  setImageWidth = () => {
    try {
      const that = this;
      const { src, callBack } = this.props;
      const parentWidth = this.myRef.current.closest(".img").clientWidth;
      if (parentWidth) {
        const new_width = `${parentWidth + 0}x`;
        let fake_rake = this.myRef.current.cloneNode(true);
        fake_rake.src = this.imageUrl(src, new_width);
        fake_rake.onload = function () {
          that.setState({ parentWidth: new_width }, () => {
            if (callBack) {
              callBack();
            }
          });
        }
      }
      else {
        this.setState({ parentWidth: "grande" });
      }
    }
    catch (e) {
      this.setState({ parentWidth: "grande" });
    }
  }
  render() {
    let { src, alt, callBack, className, ...otherProps } = this.props;
    let srcset = "";
    if (className) {
      className = `lazyload ${className}`;
    }
    else {
      className = 'lazyload';
    }
    // eslint-disable-next-line
    let srcsetArray = [180, 360, 480, 765, 900, 1000, 1200, 1500, 1900];
    if (!src) {
      src = "https://cdn.shopify.com/s/files/1/0086/3446/6419/files/placeholder-images-image.jpg";
    }
    srcsetArray = srcsetArray.map(srcNo => {
      srcset = `${srcset} ${this.imageUrl(src, `${srcNo}x`)} ${srcNo}w,`;
      return src;
    });

    let { parentWidth } = this.state;

    if (!parentWidth) {
      parentWidth = '30x';
    }
    return (
      <img src={this.imageUrl(src, "30x")}
        data-srcset={srcset}
        data-sizes="auto"
        className={className} alt={alt} {...otherProps}
        ref={this.myRef}
        data-blur="true"></img>
    )
  }
}
export default Srcset;
