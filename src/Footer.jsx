export default function Footer(props) {
  return (
    <div className="fixed inset-x-0 bottom-2">
      <div className="text-lg xs:text-sm text- flex justify-center">
        <p>
          ©2024{" "}
          <a target="_blank" href="https://majkeloess.dev">
            {" "}
            Michał Saturczak
          </a>
          .{" "}
          {props.lang == "en"
            ? "All rights reserved."
            : "Wszystkie prawa zastrzeżone."}
        </p>
      </div>
    </div>
  );
}
