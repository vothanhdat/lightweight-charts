import { DeepPartial } from '../helpers/strict-type-checks';

import { PriceScale, PriceScaleOptions } from '../model/price-scale';

/** Interface to control chart's price scale */
export interface IPriceScaleApi {
	/**
	 * Applies new options to the price scale
	 * @param options - any subset of PriceScaleOptions
	 */
	applyOptions(options: DeepPartial<PriceScaleOptions>): void;

	/**
	 * Returns currently applied options of the price scale
	 * @returns full set of currently applied options, including defaults
	 */
	options(): Readonly<PriceScaleOptions>;

	priceScale(): PriceScale;
}
