import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 6;

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: require('../../../images/sliderImage.png'),
        },
        {
          title: require('../../../images/sliderImage.png'),
        },
        {
          title: require('../../../images/sliderImage.png'),
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: COLORS.slideItemBorder,
          marginTop: normalization(10),
          height: '90%',
          overflow: 'hidden',
        }}>
        <Image style={{height: '100%', width: '100%'}} source={item.title} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <Carousel
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          inactiveSlideShift={0.9}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
        <Pagination
          dotsLength={this.state.carouselItems.length}
          activeDotIndex={this.state.activeIndex}
          containerStyle={styles.paginationContainer}
          dotColor={'#fff'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={'#fff'}
          inactiveDotScale={1}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  exampleContainer: {
    flex: 1,
  },
  slider: {
    marginTop: normalization(5),
    marginBottom: normalization(5),
    overflow: 'visible', // for custom animations
  },
  paginationContainer: {
    paddingVertical: 0,
  },
  paginationDot: {
    width: normalization(12),
    height: normalization(12),
    borderRadius: 20 / 2,
    borderWidth: 4,
    borderColor: COLORS.dotColor,
    marginBottom: normalization(15),
  },
});
