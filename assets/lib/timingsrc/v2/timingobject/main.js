/*
	Copyright 2015 Norut Northern Research Institute
	Author : Ingar Mæhlum Arntzen

  This file is part of the Timingsrc module.

  Timingsrc is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Timingsrc is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with Timingsrc.  If not, see <http://www.gnu.org/licenses/>.
*/

import timingobject from './timingobject';
import SkewConverter from './skewconverter';
import DelayConverter from './delayconverter'; 
import ScaleConverter from './scaleconverter';
import LoopConverter from './loopconverter';
import RangeConverter from './rangeconverter';
import TimeShiftConverter from './timeshiftconverter';
import DerivativeConverter from './derivativeconverter';
export default {
	// testing
	TimingObjectBase : timingobject.TimingObjectBase,
	InternalProvider : timingobject.InternalProvider,
	ExternalProvider : timingobject.ExternalProvider,
	// api
	TimingObject : timingobject.TimingObject,
	SkewConverter : SkewConverter,
	DelayConverter : DelayConverter,
	ScaleConverter : ScaleConverter,
	LoopConverter : LoopConverter,
	RangeConverter : RangeConverter,
	TimeShiftConverter : TimeShiftConverter,
	DerivativeConverter : DerivativeConverter,
}