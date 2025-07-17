import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-700">📧 {email}</p>
      <p className="text-gray-700">📞 {phone}</p>
      <p className="text-gray-700">🌐 {website}</p>
      <div className="mt-3 text-sm text-gray-600">
        <p><strong>Company:</strong> {company?.name ?? "N/A"}</p>
        <p><strong>Address:</strong> {address?.suite ?? ""}, {address?.street ?? ""}, {address?.city ?? ""}</p>
      </div>
    </div>
  );
};

export default UserCard;

