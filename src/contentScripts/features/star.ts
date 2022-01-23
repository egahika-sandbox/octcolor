import { createFeature } from "."

export default createFeature("^https://github.com/.*tab=star", () => {
  document
    .querySelectorAll(
      "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.d-lg-flex.gutter-lg.mt-5 > div.col-lg-9 > .col-12"
    )
    .forEach((el) => {
      const starEl = el.querySelector(
        "div.f6.color-fg-muted.mt-2 > a:nth-child(2)"
      )!
      const star = parseInt(starEl.innerText.replace(",", "")) // " 50,000 " -> 50000

      if (star > 5000) {
        el.className += " color-border-sponsors-emphasis btn"
      }
    })
})
