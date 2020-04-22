
/*
  Written by Ingar Arntzen, Norut
*/
import timingobject from './timingobject/main';
// require('./sequencing/main');
import mediasync from './mediasync/mediasync';

console.log(mediasync)

export default {
	version : "v2",

	// Timing Object
	TimingObject : timingobject.TimingObject,

	// Timing Converters
	ConverterBase : timingobject.ConverterBase,
	SkewConverter : timingobject.SkewConverter,
	DelayConverter : timingobject.DelayConverter,
	ScaleConverter : timingobject.ScaleConverter,
	LoopConverter : timingobject.LoopConverter,
	RangeConverter : timingobject.RangeConverter,
	TimeShiftConverter : timingobject.TimeShiftConverter,
	LocalConverter : timingobject.LocalConverter,
	DerivativeConverter : timingobject.DerivativeConverter,

	// Sequencing
	// Interval : sequencing.Interval,
	// Sequencer : sequencing.Sequencer,
	// setPointCallback : sequencing.setPointCallback,
	// setIntervalCallback : sequencing.setIntervalCallback,
	// TimingInteger : sequencing.TimingInteger,
	// ActiveCue : sequencing.ActiveCue,

	// MediaSync
	MediaScape : mediasync
};
