import Layout from "../../components/layout/Layout";
import Link from 'next/link'

export default function ReduceWorkloads() {
  return (
    <>
      <Layout>
        <div className="relative py-16 bg-white overflow-hidden">
          <div
            className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div className="relative h-full text-lg max-w-prose mx-auto"
                 aria-hidden="true">
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4}
                          className="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={404} height={384}
                      fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4}
                          className="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={404} height={384}
                      fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4}
                          className="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={404} height={384}
                      fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
            <span
              className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Time is money
            </span>
                <span
                  className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Reduce Staff Workloads
            </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                Management should not mean endless SSH tunnels or VPN
                connections
              </p>
            </div>
            <div
              className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                A real problem with pfSense and other open source firewalls is
                the lack of unified management. This means administrators are
                often waiting for their SSH tunnels or VPN connections to
                establish before even gaining access to the device.
              </p>
              <p>
                This says nothing to the monotony that is clicking through all
                the tabs and panes to actually make the change. Compound this
                over a number of devices and it could mean an entire days work
                just to update some rules or upgrade a package.
              </p>
              <h2>Mudmap unifies your devices</h2>
              <p>
                After connecting your device to Mudmap, you no longer need to
                log in to that device individually. It will display all the
                relevant information pertaining that device, similar to
                pfSense’s current user interface. You can also make changes,
                restart services or even reboot the device. Once back online,
                Mudmap will connect with it again, without any action on your
                part.
              </p>
              <p>
                Things Mudmap lets you do without logging into each device
                manually:
              </p>
              <ul>
                <li>View system information</li>
                <li>View system information</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                <li>View and update DNS records, VLAN and Interface’s</li>
                <li>Download latest configuration files for backup</li>
                <li>View, update and delete firewall rules</li>
                <li>Update firewall alias' lists</li>
                <li>View state and table data</li>
                <li>Configure traffic shaping</li>
                <li>..with more coming</li>
              </ul>
              <p>
                Knowing that you can do all these tasks from one location,
                without the monotony of individual logins, why waste anymore
                time?
              </p>
              <div>
                <Link href="/contact">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Find out more
                  </button>
                </Link>
                <Link href="/register">
                  <button
                    type="button"
                    className="ml-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
