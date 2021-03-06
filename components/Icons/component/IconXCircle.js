import React from 'react'
import { iconDefaultProps } from '../IconProps'

const IconXCircle = ({ size, color, ...props }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18zM8.707 7.293a1 1 0 0 0-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L10 8.586 8.707 7.293z"
			fill={color}
		/>
	</svg>
)

IconXCircle.defaultProps = {
	...iconDefaultProps,
}

export default IconXCircle
