import "./Footer.scss";
import { Language} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerData">
        <span className="help">
          Questions? Call <a href="/">000-800-040-1843</a>
        </span>
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Perferebces</li>
          <li>Corporate InforMation</li>
        </ul>
        <select name="language" id="language">
          <option value="English">English</option>
          <option value="Hindi">हिन्दी</option>
        </select>
        <Language id="icon"/>
      </div>
    </div>
  );
}

export default Footer