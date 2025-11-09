'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { DemoFormData } from '@/lib/types';

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoFormData>();

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-form" className="py-20 bg-gradient-clinical">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-clinical-gray-900 mb-4">
              Request a Product Demonstration
            </h2>
            <p className="text-lg text-clinical-gray-600">
              Experience the power of Disintox® firsthand. Our team will contact you within 48 hours.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-chlorine-50 border border-chlorine-200 rounded-lg text-chlorine-800">
              Thank you for your interest! We&apos;ll contact you within 48 hours to schedule your demonstration.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              There was an error submitting your request. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Dr. John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  {...register('organization', { required: 'Organization is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Hospital Name / Institution"
                />
                {errors.organization && (
                  <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                  Role / Designation *
                </label>
                <input
                  {...register('role', { required: 'Role is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Procurement Officer / Administrator"
                />
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  type="tel"
                  className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="johndoe@hospital.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                  Sector *
                </label>
                <select
                  {...register('sector', { required: 'Sector is required' })}
                  className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select Sector</option>
                  <option value="hospitals">Hospitals & Healthcare</option>
                  <option value="water-treatment">Water Treatment</option>
                  <option value="food-processing">Food Processing</option>
                  <option value="laboratories">Laboratories</option>
                  <option value="transport">Medical Transport</option>
                  <option value="other">Other</option>
                </select>
                {errors.sector && (
                  <p className="mt-1 text-sm text-red-600">{errors.sector.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-clinical-gray-700 mb-2">
                Message / Requirements
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 border border-clinical-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tell us about your specific needs or questions..."
              />
            </div>

            <div className="flex items-start">
              <input
                {...register('privacyConsent', { required: 'You must accept the privacy policy' })}
                type="checkbox"
                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-clinical-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-clinical-gray-600">
                I agree to the <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to be contacted about Disintox® products.
              </label>
            </div>
            {errors.privacyConsent && (
              <p className="text-sm text-red-600">{errors.privacyConsent.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-hero text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-clinical hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
