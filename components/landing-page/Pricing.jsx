import {CheckIcon} from '@heroicons/react/outline'

const features = [
  'Only pay for what you use.',
  'Full API access to the your devices.',
  'One dashboard to rule them all',
  'No lock-in - pay per month',
  'Add and remove devices at anytime'
]
const tiers = [
  {
    name: 'Small Business',
    href: '#',
    priceMonthly: 6,
    description: 'For the first 1 to 25 devices',
  },
  {
    name: 'Medium Business',
    href: '#',
    priceMonthly: 5.50,
    description: 'For the next 26 to 75 devices',
  },
  {
    name: 'Corporate Plan',
    href: '#',
    priceMonthly: 5,
    description: 'For the next 76 to 150 devices',
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 4.50,
    description: 'For each device thereafter',
  },
]
export default function Pricing() {

  return (
    <div id="pricing" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1
              className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-gray-900">Connected devices from </span>
              <span className="text-indigo-600">$4.5 a month</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Pricing is calculated in a <span className="font-semibold">per-seat</span> arrangement. You'll
              only
              pay for firewalls which are active on the platform.
            </p>
            <p className="mt-1 text-xl text-gray-500">
              We use a graduated pricing model so the more devices the bigger
              the discount.
            </p>
          </div>
          <a
            href="/register"
            className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
          </a>
        </div>

        <PricingTier/>
        <div
          className="border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2
              className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Everything
              you need</h2>
            <p
              className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one
              platform</p>
            <p className="mt-4 text-lg text-gray-500">
              You can upgrade, downgrade or cancel your subscription at
              anytime.
            </p>
          </div>
          <div
            className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                               aria-hidden="true"/>
                    <span
                      className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                               aria-hidden="true"/>
                    <span
                      className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <ul
              className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              {features.slice(5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature}
                      className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                               aria-hidden="true"/>
                    <span
                      className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                               aria-hidden="true"/>
                    <span
                      className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const PricingTier = () => {
  return (
    <div id="pricing-tiers" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex sm:flex-col sm:align-center">
           <p className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Graduated Pricing Tiers
          </p>
        </div>
        <div
          className="mt-12 space-y-4 sm:mt-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name}
                 className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2
                  className="text-lg leading-6 font-semibold text-gray-900">{tier.name}</h2>
                <p
                  className="mt-4 text-base text-gray-500">{tier.description}</p>
                <p className="mt-8">
                    <span
                      className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span
                    className="text-base font-medium text-gray-500">/mo</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
