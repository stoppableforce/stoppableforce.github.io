import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Sidelinks: QuartzComponent = ({
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
      <div class={classNames(displayClass, "backlinks")}>
        <h3>Elsewhere</h3>
        <ul>
            {Object.entries(links).map(([text, link]) => (
              <li>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
      </div>
    )
  }

  Sidelinks.css = style
  return Sidelinks
}) satisfies QuartzComponentConstructor
