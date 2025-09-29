import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<section className="s-we-do tf-spacing-3">
  <div className="tf-container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading mb-70">
          <p className="s-sub-title mb-15 justify-center">
            what we do
          </p>
          <p className="s-title text-center text-anime-style-2">
            Comprehensive Solutions in <br />
            <span>Accounting, Audit, ERP & Payroll</span>
          </p>
        </div>

        {/* Row 1 with 3 services */}
        <div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Accounting & Reporting */}
          <div className="box-icon style-8">
            <Link href="/our-services/accounting-reporting" className="title">
              Accounting & Reporting
            </Link>
            <span className="line mb-30" />
            <p className="text">
              We handle end-to-end bookkeeping to financial statements, management reporting, and budgeting. We ensure compliance with both local and international accounting standards.
            </p>
          </div>

          {/* Data Entry & Audit Support */}
          <div className="box-icon style-8">
            <Link href="/our-services/data-entry-audit-support" className="title">
              Data Entry & Audit Support
            </Link>
            <span className="line mb-30" />
            <p className="text">
              We provide accurate data entry, bank reconciliations, and audit-ready documentation for seamless financial operations.
            </p>
          </div>

          {/* Internal Control */}
          <div className="box-icon style-8">
            <Link href="/our-services/internal-control-financial-reporting" className="title">
              Internal Control over Financial Reporting
            </Link>
            <span className="line mb-30" />
            <p className="text">
              We design and implement internal control frameworks to ensure compliance, transparency, and fraud prevention.
            </p>
          </div>
        </div>

        {/* Row 2 with 2 services */}
        <div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ERP Functional Support */}
          <div className="box-icon style-8">
            <Link href="/our-services/erp-functional-support" className="title">
              ERP Functional Support
            </Link>
            <span className="line mb-30" />
            <p className="text">
              We assist with ERP user training, process documentation, and system integration support to ensure smooth implementation.
            </p>
          </div>

          {/* HR & Payroll */}
          <div className="box-icon style-8">
            <Link href="/our-services/hr-payroll-services" className="title">
              HR & Payroll Services
            </Link>
            <span className="line mb-30" />
            <p className="text">
              We manage payroll processing, employee benefits, statutory compliance, and HR data management for smooth operations.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


		</>
	)
}
