import PropTypes from 'prop-types';
import {View} from '@fower/taro';
import './index.scss';

const Empty = ({image, description = '暂无数据', children}) => {
  return (
    <View my8 toCenter column gray500>
      {image ? image : <View className="mx-empty-image" w="128px" h="82px"/>}
      <View mt4>{description}</View>
      <View mt4>{children}</View>
    </View>
  );
};

Empty.propTypes = {
  image: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
};

export default Empty;
