import Link from "next/link"

export function BlogConsultationCta() {
  return (
    <div className="px-5 pb-16 pt-2 md:px-10 md:pb-20 md:pt-0">
      <div className="mx-auto max-w-[800px] rounded-2xl bg-[#326ea2] px-6 py-10 text-center text-[#F5F5F0] shadow-lg md:px-12">
        <h2 className="font-serif text-2xl md:text-3xl">Ready to get started?</h2>
        <p className="mt-2 font-sans text-base text-[#F5F5F0]/90">
          Connect with a licensed clinician to discuss your health goals.
        </p>
        <Link
          href="#login"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#F5F5F0] px-8 py-3 font-sans text-sm font-medium text-[#326ea2] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Book consultation
        </Link>
      </div>
    </div>
  )
}
