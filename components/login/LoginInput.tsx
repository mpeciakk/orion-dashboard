export default function LoginInput({ type, label }: { type: string; label: string }) {
  return (
    <div className="login-input-container">
      <input className="login-input" name={label} type={type} required />
      <label className="login-input-label" htmlFor={label}>
        <span className="content">{label}</span>
      </label>
    </div>
  )
}
