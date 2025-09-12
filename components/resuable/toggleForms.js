'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import RentAccountantForm from './rentAccountantForm'
import JoinOurTeam from './joinOurTeam'

export default function ToggleForms() {
  const searchParams = useSearchParams()
  const [isTab, setIsTab] = useState(1)

  // Check URL param and set tab on first render
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab")
    if (tabFromUrl) {
      setIsTab(Number(tabFromUrl))
    }
  }, [searchParams])

  const handleTab = (i) => {
    setIsTab(i)
    // Update URL without reload
    const url = new URL(window.location.href)
    url.searchParams.set("tab", i)
    window.history.replaceState({}, "", url)
  }

  return (
    <section className="s-our-saylo">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <p className="s-sub-title mb-18 justify-center">
              <i className="icon-angles-right moveLeftToRight" />
              Explore Our Services
            </p>
            <p className="s-title text-center text-anime-wave">
              Smart Solutions to <span>Power Your Finances</span>
            </p>
            <p className="mb-70 text-center mt-2 mx-auto max-w-3xl">
              Whether you need a dedicated accountant or project-based delivery, our flexible engagement models give you access to skilled finance professionals — helping you save time, cut costs, and scale with confidence.
            </p>
          </div>

          <div className="col-lg-12">
            <div className="wg-tabs">
              <ul className="overflow-x-auto menu-tab flex justify-center">
                <li
                  className={`item ${isTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTab(1)}
                >
                  <a>
                    <span>Rent a Resource</span>
                  </a>
                </li>
                <li
                  className={`item ${isTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTab(2)}
                >
                  <a>
                    <span>Join Our Team</span>
                  </a>
                </li>
              </ul>

              <div className="widget-content-tab">
                <div
                  className={`widget-content-inner ${isTab === 1 ? 'active' : ''}`}
                  style={{ display: isTab === 1 ? "block" : "none" }}
                >
                  <RentAccountantForm />
                </div>
                <div
                  className={`widget-content-inner ${isTab === 2 ? 'active' : ''}`}
                  style={{ display: isTab === 2 ? "block" : "none" }}
                >
                  <JoinOurTeam />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
