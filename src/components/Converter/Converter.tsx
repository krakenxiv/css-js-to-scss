import React, { useState, useRef } from 'react';
import styles from './Converter.module.scss';

const Converter = () => {
	const [textToConvert, setTextToConvert] = useState('');
	const [outputText, setOutputText] = useState('');
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const handleClick = () => {
		if (inputRef && inputRef.current && inputRef.current.value) {
			convertText(inputRef.current.value);
		}
	};

	const convertText = (text: string) => {
		let newText = '';
		newText = text.replaceAll('\',', ';');
		newText = newText.replaceAll('`,', ';');
		newText = newText.replaceAll(',', ';');
		newText = newText.replaceAll('\'', '');
		newText = newText.replaceAll(': {', '{');
		newText = newText.replaceAll('`$', '');
		newText = newText.replaceAll('`', '');
		newText = newText.replaceAll('};', '}');
		newText = newText.replaceAll('${Colors.', '');
		newText = newText.replaceAll('Colors.', '');
		newText = newText.replaceAll(':active', '&:active');
		newText = newText.replaceAll('::after', '&::after');
		newText = newText.replaceAll('alignContent', 'align-content');
		newText = newText.replaceAll('alignItems', 'align-items');
		newText = newText.replaceAll('alignSelf', 'align-self');
		newText = newText.replaceAll('animationDelay', 'animation-delay');
		newText = newText.replaceAll('::before', '&::before');
		newText = newText.replaceAll('backgroundColor', 'background-color');
		newText = newText.replaceAll('borderBottomColor', 'border-bottom-color');
		newText = newText.replaceAll('backgroundImage', 'background-image');
		newText = newText.replaceAll('backgroundPosition', 'background-position');
		newText = newText.replaceAll('backgroundPositionX', 'background-position-x');
		newText = newText.replaceAll('backgroundPositionY', 'background-position-y');
		newText = newText.replaceAll('backgroundRepeat', 'background-repeat');
		newText = newText.replaceAll('backgroundSize', 'background-size');
		newText = newText.replaceAll('borderBottom', 'border-bottom');
		newText = newText.replaceAll('borderBottomWidth', 'border-bottom-width');
		newText = newText.replaceAll('borderBottomStyle', 'border-bottom-style');
		newText = newText.replaceAll('borderBottomLeftRadius', 'border-bottom-left-radius');
		newText = newText.replaceAll('borderBottomRightRadius', 'border-bottom-right-radius');
		newText = newText.replaceAll('borderTopLeftRadius', 'border-top-left-radius');
		newText = newText.replaceAll('borderStyle', 'border-style');
		newText = newText.replaceAll('borderTopWidth', 'border-top-width');
		newText = newText.replaceAll('borderColor', 'border-color');
		newText = newText.replaceAll('borderLeftColor', 'border-left-color');
		newText = newText.replaceAll('borderLeft', 'border-left');
		newText = newText.replaceAll('borderRightColor', 'border-right-color');
		newText = newText.replaceAll('borderRight', 'border-right');
		newText = newText.replaceAll('borderTop', 'border-top');
		newText = newText.replaceAll('borderWidth', 'border-width');
		newText = newText.replaceAll('borderRadius', 'border-radius');
		newText = newText.replaceAll('boxShadow', 'box-shadow');
		newText = newText.replaceAll('boxSizing', 'box-sizing');
		newText = newText.replaceAll('flexDirection', 'flex-direction');
		newText = newText.replaceAll('fontFamily', 'font-family');
		newText = newText.replaceAll('flexGrow', 'flex-grow');
		newText = newText.replaceAll('flexWrap', 'flex-wrap');
		newText = newText.replaceAll(':focus', '&:focus');
		newText = newText.replaceAll('fontSize', 'font-size');
		newText = newText.replaceAll('fontStyle', 'font-style');
		newText = newText.replaceAll('fontVariant', 'font-variant');
		newText = newText.replaceAll('fontWeight', 'font-weight');
		newText = newText.replaceAll('globalStyle({styles', 'move_to_global');
		newText = newText.replaceAll('globalStyle(', 'move_to_global');
		newText = newText.replaceAll('gridTemplateColumns', 'grid-template-columns');
		newText = newText.replaceAll(':hover', '&:hover');
		newText = newText.replaceAll('import Colors', '@import \'../../scss/colors\';');
		newText = newText.replaceAll('justifyContent', 'justify-content');
		newText = newText.replaceAll('letterSpacing', 'letter-spacing');
		newText = newText.replaceAll('lineHeight', 'line-height');
		newText = newText.replaceAll('listStyle', 'list-style');
		newText = newText.replaceAll('marginBottom', 'margin-bottom');
		newText = newText.replaceAll('marginLeft', 'margin-left');
		newText = newText.replaceAll('marginRight', 'margin-right');
		newText = newText.replaceAll('marginTop', 'margin-top');
		newText = newText.replaceAll('maxHeight', 'max-height');
		newText = newText.replaceAll('maxWidth', 'max-width');
		newText = newText.replaceAll('minHeight', 'min-height');
		newText = newText.replaceAll('minWidth', 'min-width');
		newText = newText.replaceAll('objectFit', 'object-fit');
		newText = newText.replaceAll('overflowWrap', 'overflow-wrap');
		newText = newText.replaceAll('overflowX', 'overflow-x');
		newText = newText.replaceAll('overflowY', 'overflow-y');
		newText = newText.replaceAll('paddingBottom', 'padding-bottom');
		newText = newText.replaceAll('paddingLeft', 'padding-left');
		newText = newText.replaceAll('paddingRight', 'padding-right');
		newText = newText.replaceAll('paddingTop', 'padding-top');
		newText = newText.replaceAll('pointerEvents', 'pointer-events');
		newText = newText.replaceAll('strokeWidth', 'stroke-width');
		newText = newText.replaceAll('textAlign', 'text-align');
		newText = newText.replaceAll('textDecoration', 'text-decoration');
		newText = newText.replaceAll('textOverflow', 'text-overflow');
		newText = newText.replaceAll('textShadow', 'text-shadow');
		newText = newText.replaceAll('textTransform', 'text-transform');
		newText = newText.replaceAll('touchAction', 'touch-action');
		newText = newText.replaceAll('transformOrigin', 'transform-origin');
		newText = newText.replaceAll('userSelect', 'user-select');
		newText = newText.replaceAll('verticalAlign', 'vertical-align');
		newText = newText.replaceAll(':visited', '&:visited');
		newText = newText.replaceAll('WebkitTransform', '-webkit-transform');
		newText = newText.replaceAll('WebkitBackfaceVisibility', '-webkit-backface-visibility');
		newText = newText.replaceAll('whiteSpace', 'white-space');
		newText = newText.replaceAll('wordBreak', 'word-break');
		newText = newText.replaceAll('wordWrap', 'word-wrap');
		newText = newText.replaceAll('zIndex', 'z-index');
		// newText = newText.replaceAll('', '');
		// newText = newText.replaceAll('', '');
		setOutputText(newText);
		console.log(newText);
	};


	return (
		<div className={styles.converterContainer}>
			<h1>Converter {textToConvert}</h1>
			<form className={styles.converterForm}>
				<textarea ref={inputRef} />
				<textarea value={outputText} />
			</form>
			<button onClick={handleClick}>Convert me!</button>
		</div>
	);
}

export default Converter;
