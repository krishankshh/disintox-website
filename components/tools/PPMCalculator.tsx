'use client';

import { useState } from 'react';

export default function PPMCalculator() {
  const [calculatorMode, setCalculatorMode] = useState<'tablets' | 'gel'>('tablets');
  const [volume, setVolume] = useState<string>('');
  const [targetPPM, setTargetPPM] = useState<string>('100');
  const [tablets, setTablets] = useState<string>('');

  // Constants for calculations
  const TABLET_TO_WATER_RATIO = 10; // 1 tablet per 10L water produces 100 PPM
  const TABLET_PPM_OUTPUT = 100; // Each tablet in 10L gives 100 PPM

  // Calculate tablets needed
  const calculateTablets = () => {
    const vol = parseFloat(volume);
    const ppm = parseFloat(targetPPM);

    if (isNaN(vol) || isNaN(ppm) || vol <= 0 || ppm <= 0) {
      return null;
    }

    // Formula: tablets = (volume * target_ppm) / (10L * 100 PPM)
    const tabletsNeeded = (vol * ppm) / (TABLET_TO_WATER_RATIO * TABLET_PPM_OUTPUT);

    return {
      exact: tabletsNeeded,
      rounded: Math.ceil(tabletsNeeded),
      actualPPM: (tabletsNeeded * TABLET_TO_WATER_RATIO * TABLET_PPM_OUTPUT) / vol
    };
  };

  // Calculate PPM from tablets
  const calculatePPM = () => {
    const vol = parseFloat(volume);
    const tab = parseFloat(tablets);

    if (isNaN(vol) || isNaN(tab) || vol <= 0 || tab <= 0) {
      return null;
    }

    // Formula: PPM = (tablets * 10L * 100 PPM) / volume
    const resultingPPM = (tab * TABLET_TO_WATER_RATIO * TABLET_PPM_OUTPUT) / vol;

    return resultingPPM;
  };

  const tabletResult = calculateTablets();
  const ppmResult = calculatePPM();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border-2 border-primary-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-Hospital-gray-900 mb-2">
            PPM Calculator
          </h2>
          <p className="text-Hospital-gray-600">
            Calculate the right dosage for your disinfection needs
          </p>
        </div>

        {/* Product Type Selector */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setCalculatorMode('tablets')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              calculatorMode === 'tablets'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-Hospital-gray-100 text-Hospital-gray-700 hover:bg-Hospital-gray-200'
            }`}
          >
            💊 Tablets
          </button>
          <button
            onClick={() => setCalculatorMode('gel')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              calculatorMode === 'gel'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-Hospital-gray-100 text-Hospital-gray-700 hover:bg-Hospital-gray-200'
            }`}
          >
            🧴 Gel
          </button>
        </div>

        {calculatorMode === 'tablets' ? (
          <div className="space-y-8">
            {/* Calculator 1: Volume + Target PPM → Tablets Needed */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="text-xl font-bold text-Hospital-gray-900 mb-4">
                Calculate Tablets Needed
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-Hospital-gray-700 mb-2">
                    Volume of Water (Liters)
                  </label>
                  <input
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="e.g., 100"
                    className="w-full px-4 py-3 border-2 border-Hospital-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-Hospital-gray-700 mb-2">
                    Target PPM
                  </label>
                  <select
                    value={targetPPM}
                    onChange={(e) => setTargetPPM(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-Hospital-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                  >
                    <option value="50">50 PPM (Light sanitization)</option>
                    <option value="100">100 PPM (Standard disinfection)</option>
                    <option value="200">200 PPM (Heavy-duty disinfection)</option>
                    <option value="500">500 PPM (Fumigation)</option>
                    <option value="1000">1000 PPM (Deep sterilization)</option>
                  </select>
                </div>
              </div>

              {tabletResult && (
                <div className="bg-white rounded-lg p-6 border-2 border-primary-400">
                  <h4 className="text-lg font-bold text-primary-600 mb-3">Result:</h4>
                  <div className="space-y-2">
                    <p className="text-Hospital-gray-900">
                      <span className="font-semibold">Tablets Needed:</span>{' '}
                      <span className="text-2xl font-bold text-primary-600">
                        {tabletResult.rounded}
                      </span>{' '}
                      {tabletResult.rounded === 1 ? 'tablet' : 'tablets'}
                    </p>
                    {tabletResult.exact !== tabletResult.rounded && (
                      <p className="text-sm text-Hospital-gray-600">
                        (Exact: {tabletResult.exact.toFixed(2)} tablets)
                      </p>
                    )}
                    <p className="text-sm text-Hospital-gray-700 mt-3 pt-3 border-t border-Hospital-gray-200">
                      📊 Using {tabletResult.rounded} {tabletResult.rounded === 1 ? 'tablet' : 'tablets'} in {volume}L water will give you approximately{' '}
                      <span className="font-bold text-secondary-600">
                        {((tabletResult.rounded * TABLET_TO_WATER_RATIO * TABLET_PPM_OUTPUT) / parseFloat(volume)).toFixed(1)} PPM
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Calculator 2: Volume + Tablets → Resulting PPM */}
            <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-xl p-6 border border-secondary-200">
              <h3 className="text-xl font-bold text-Hospital-gray-900 mb-4">
                Calculate Resulting PPM
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-Hospital-gray-700 mb-2">
                    Volume of Water (Liters)
                  </label>
                  <input
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="e.g., 100"
                    className="w-full px-4 py-3 border-2 border-Hospital-gray-300 rounded-lg focus:border-secondary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-Hospital-gray-700 mb-2">
                    Number of Tablets
                  </label>
                  <input
                    type="number"
                    value={tablets}
                    onChange={(e) => setTablets(e.target.value)}
                    placeholder="e.g., 5"
                    className="w-full px-4 py-3 border-2 border-Hospital-gray-300 rounded-lg focus:border-secondary-500 focus:outline-none"
                  />
                </div>
              </div>

              {ppmResult && (
                <div className="bg-white rounded-lg p-6 border-2 border-secondary-400">
                  <h4 className="text-lg font-bold text-secondary-600 mb-3">Result:</h4>
                  <p className="text-Hospital-gray-900">
                    <span className="font-semibold">Resulting Concentration:</span>{' '}
                    <span className="text-3xl font-bold text-secondary-600">
                      {ppmResult.toFixed(1)} PPM
                    </span>
                  </p>
                  <p className="text-sm text-Hospital-gray-700 mt-3 pt-3 border-t border-Hospital-gray-200">
                    💡 This concentration is suitable for{' '}
                    {ppmResult < 75 ? 'light sanitization' :
                     ppmResult < 150 ? 'standard disinfection' :
                     ppmResult < 300 ? 'heavy-duty disinfection' :
                     ppmResult < 750 ? 'fumigation' : 'deep sterilization'}
                  </p>
                </div>
              )}
            </div>

            {/* Reference Guide */}
            <div className="bg-Hospital-gray-50 rounded-xl p-6 border border-Hospital-gray-200">
              <h3 className="text-lg font-bold text-Hospital-gray-900 mb-4">📚 Reference Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-Hospital-gray-900 mb-2">Standard Ratio:</h4>
                  <p className="text-sm text-Hospital-gray-700">1 tablet per 10L water = 100 PPM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-Hospital-gray-900 mb-2">Recommended PPM:</h4>
                  <ul className="text-sm text-Hospital-gray-700 space-y-1">
                    <li>• 50-100 PPM: Surface disinfection</li>
                    <li>• 100-200 PPM: Equipment sterilization</li>
                    <li>• 200-500 PPM: Room fumigation</li>
                    <li>• 500-1000 PPM: Deep sterilization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🧴</div>
            <h3 className="text-2xl font-bold text-Hospital-gray-900 mb-3">
              Disintox® Gel
            </h3>
            <p className="text-Hospital-gray-600 mb-6 max-w-2xl mx-auto">
              Disintox® Gel is a ready-to-use formulation that doesn't require dilution or PPM calculations.
              Simply apply directly to the surface and let it work for 2-5 minutes.
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200 max-w-2xl mx-auto">
              <h4 className="font-bold text-Hospital-gray-900 mb-3">Application Instructions:</h4>
              <ul className="text-left text-Hospital-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">1.</span>
                  <span>Apply gel directly to the surface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">2.</span>
                  <span>Allow 2-5 minutes contact time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">3.</span>
                  <span>Wipe clean or rinse if needed</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
