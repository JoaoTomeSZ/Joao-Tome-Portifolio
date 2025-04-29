import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = ['https://github.com', 'https://linkedin.com'];
const icons = [<GitHubIcon color="secondary" fontSize="large"/>, <LinkedInIcon color="primary" fontSize="large"/>];

const Icons = () => {
  return (
    <ul className="flex gap-4 text-9xl ">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ">
            {icons[index]}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Icons;